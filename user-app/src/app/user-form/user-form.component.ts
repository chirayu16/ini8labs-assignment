// user-form.component.ts
import { ChangeDetectionStrategy, Component, signal, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { merge } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService, User } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly name = new FormControl('', [Validators.required]);
  readonly dob = new FormControl('', [Validators.required]);
 
  errorMessage = signal('');
  nameErrorMessage = signal('');
  isSubmitting = signal(false);
  isEditMode = false;

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: User | undefined
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNameErrorMessage());

    if (data) {
      this.isEditMode = true;
      this.name.setValue(data.name);
      this.email.setValue(data.email);
      this.dob.setValue(data.dob);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    console.log(this.data);
    if (this.email.valid && this.name.valid && this.dob.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
  
      const formData: User = {
        _id: this.isEditMode && this.data?._id ? this.data._id : undefined, 
        name: this.name.value!,
        email: this.email.value!,
        dob: this.dob.value!
      };
  
      if (this.isEditMode && formData._id) { // Ensure ID is present for update
        this.userService.updateUser(formData).subscribe({
          next: (response) => {
            this.snackBar.open('User updated successfully!', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.dialogRef.close(response);
          },
          error: (error) => {
            console.error('Error updating user:', error);
            this.snackBar.open(error.message || 'Failed to update user', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.isSubmitting.set(false);
          }
        });
      } else {
        this.userService.addUser(formData).subscribe({
          next: (response) => {
            this.snackBar.open('User added successfully!', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.dialogRef.close(response);
          },
          error: (error) => {
            console.error('Error adding user:', error);
            this.snackBar.open(error.message || 'Failed to add user', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.isSubmitting.set(false);
          }
        });
      }
    }
  }
  
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  updateNameErrorMessage() {
    if (this.name.hasError('required')) {
      this.nameErrorMessage.set('You must enter a name');
    } else {
      this.nameErrorMessage.set('');
    }
  }
}