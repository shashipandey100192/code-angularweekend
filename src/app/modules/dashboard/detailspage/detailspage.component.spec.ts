import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspageComponent } from './detailspage.component';

describe('DetailspageComponent', () => {
  let component: DetailspageComponent;
  let fixture: ComponentFixture<DetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
