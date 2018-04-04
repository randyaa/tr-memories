import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstleyComponent } from './astley.component';

describe('AstleyComponent', () => {
  let component: AstleyComponent;
  let fixture: ComponentFixture<AstleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
