import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/component-service/stepper.service';
import { MainJoiner } from 'src/app/main-joinner';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ageValidator } from 'src/app/shared/form-validator';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  private stepId = 2;
  public mainJoinerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', [Validators.required, ageValidator(MainJoiner.minAge)]],
  });

  constructor(
    private stepperService: StepperService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepperService.activeStep(this.stepId);
  }

  onSubmit() {
    const newJoiner = new MainJoiner( this.mainJoinerForm.get('name').value,
                                      this.mainJoinerForm.get('email').value,
                                      new Date(this.mainJoinerForm.get('dateOfBirth').value));
  }
}