import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfilterComponent } from './bookfilter.component';

describe('BookfilterComponent', () => {
  let component: BookfilterComponent;
  let fixture: ComponentFixture<BookfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
