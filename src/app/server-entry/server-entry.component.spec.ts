import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEntryComponent } from './server-entry.component';

describe('ServerEntryComponent', () => {
  let component: ServerEntryComponent;
  let fixture: ComponentFixture<ServerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
