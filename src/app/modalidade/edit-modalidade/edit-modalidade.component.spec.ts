import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalidadeComponent } from './edit-modalidade.component';

describe('EditModalidadeComponent', () => {
  let component: EditModalidadeComponent;
  let fixture: ComponentFixture<EditModalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
