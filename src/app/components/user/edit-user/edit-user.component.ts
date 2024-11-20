import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userForm: FormGroup;
  userId: number;

  constructor(
    private fb: FormBuilder,
    private userService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: [null],
      name: [''],
      email: [''],
      role: ['']
    });
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      const user = users.find((u) => u.id === this.userId);
      if (user) {
        this.userForm.setValue(user);
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser: User = this.userForm.value;
      this.userService.updateUser(updatedUser).subscribe(() => {
        alert('User updated successfully!');
        this.router.navigate(['/user-list']);
      });
    }
  }
}
