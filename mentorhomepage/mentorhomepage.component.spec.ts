import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorhomepageComponent } from './mentorhomepage.component';

describe('MentorhomepageComponent', () => {
  let component: MentorhomepageComponent;
  let fixture: ComponentFixture<MentorhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
