import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSeriePage } from './view-serie.page';

describe('ViewSeriePage', () => {
  let component: ViewSeriePage;
  let fixture: ComponentFixture<ViewSeriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
