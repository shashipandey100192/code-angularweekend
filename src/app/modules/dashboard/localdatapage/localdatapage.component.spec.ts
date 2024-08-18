import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldatapageComponent } from './localdatapage.component';

describe('LocaldatapageComponent', () => {
  let component: LocaldatapageComponent;
  let fixture: ComponentFixture<LocaldatapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaldatapageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaldatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
