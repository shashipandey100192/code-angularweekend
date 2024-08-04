import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpagComponent } from './childpag.component';

describe('ChildpagComponent', () => {
  let component: ChildpagComponent;
  let fixture: ComponentFixture<ChildpagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildpagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
