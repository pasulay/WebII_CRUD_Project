import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: DataService,
    private router: Router
  ) {
    
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      role: ['']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe(() => {
        alert('User added successfully!');
        this.router.navigate(['/user-list']);
      });
    }
  }

}
