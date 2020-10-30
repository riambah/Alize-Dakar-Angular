import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlizeComponent } from './alize.component';

describe('AlizeComponent', () => {
  let component: AlizeComponent;
  let fixture: ComponentFixture<AlizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
