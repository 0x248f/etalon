import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferEntryComponent } from './buffer-entry.component';

describe('BufferEntryComponent', () => {
  let component: BufferEntryComponent;
  let fixture: ComponentFixture<BufferEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
