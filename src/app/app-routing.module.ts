import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowEditComponent } from './components/pages/borrow-edit/borrow-edit.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberEditComponent } from './components/pages/member-edit/member-edit.component';
import { MemberComponent } from './components/pages/member/member.component';
import { StaffEditComponent } from './components/pages/staff-edit/staff-edit.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "book", component: BookComponent, canActivate: [AuthGuard]},
    { path: "book/addbook",component: BookAddComponent, canActivate: [AuthGuard]},
    { path: "book/edit/:id", component: BookEditComponent, canActivate: [AuthGuard]},
    { path: "staff", component: StaffComponent, canActivate: [AuthGuard]},
    { path: "staff/edit/:id", component: StaffEditComponent, canActivate: [AuthGuard]},
    { path: "member", component: MemberComponent, canActivate: [AuthGuard]},
    { path: "member/edit/:id", component: MemberEditComponent, canActivate: [AuthGuard]},
    { path: "borrow", component: BorrowComponent, canActivate: [AuthGuard]},
    { path: "borrow/edit/:id", component: BorrowEditComponent, canActivate: [AuthGuard]},
    { path: "login", component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
