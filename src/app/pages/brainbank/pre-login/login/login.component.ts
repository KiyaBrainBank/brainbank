import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  signInForm: FormGroup;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email     : new FormControl('vivek.rahane@kiya.ai', [Validators.required, Validators.email]),
      password  : new FormControl('admin', [Validators.required])

    });
  }


  signIn(): void
  {
      // Return if the form is invalid
      if ( this.signInForm.invalid )
      {
          return;
      }

      // Disable the form
      this.signInForm.disable();
      this._authService._authenticated = true;
      const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/login';
      
      this._router.navigateByUrl(redirectURL);
      // Sign in
      // this._authService.signIn(this.signInForm.value)
      //     .subscribe(
      //         () => {

      //             // Set the redirect url.
      //             // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
      //             // to the correct page after a successful sign in. This way, that url can be set via
      //             // routing file and we don't have to touch here.
                  

      //             // Navigate to the redirect url
                 

      //         },
      //         (response) => {

      //             // Re-enable the form
      //             this.signInForm.enable();

      //             // Reset the form
      //             this.signInNgForm.resetForm();

      //         }
      //     );
  }

}
