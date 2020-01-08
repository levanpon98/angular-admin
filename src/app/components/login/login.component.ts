import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    alert = false;
    errorMessage: String = '';

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,

    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: new FormControl(
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                    Validators.minLength(10)
                ])
            ),
            password: new FormControl(
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8)
                ])
            )
        })
    }

    get form () {
        return this.loginForm.controls;
    }

    onSubmit(value) {
        console.log(value);
        this.authService.login(value).subscribe((res: any) => {
            if (res.ok) {
                localStorage.setItem('isLoggedIn', res.ok);
                localStorage.setItem('token', res.token);
                localStorage.setItem('message', res.message);
                localStorage.setItem('id', res.admin.id);
                localStorage.setItem('email', res.admin.email);
                localStorage.setItem('username', res.admin.username);
                localStorage.setItem('firstName', res.admin.first_name);
                localStorage.setItem('lastName', res.admin.last_name);

                this.router.navigate(['dashboard']);
            }
            else {
                this.alert = true;
                this.errorMessage = res.message;
                this.showUnsuccess();
            }
        });
        // this.loginForm.reset();
    }

    showUnsuccess() {
        this.toastr.error('This account is not existed', 'Notification');
    }

}
