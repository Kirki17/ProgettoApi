import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaniComponent } from './cani.component';

describe('CaniComponent', () => {
  let component: CaniComponent;
  let fixture: ComponentFixture<CaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
