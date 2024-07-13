import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyltileverformComponent } from './myltileverform.component';

describe('MyltileverformComponent', () => {
  let component: MyltileverformComponent;
  let fixture: ComponentFixture<MyltileverformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyltileverformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyltileverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
