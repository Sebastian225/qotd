import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestPageComponent } from './add-quest-page/add-quest-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestPageComponent } from './quest-page/quest-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: QuestPageComponent, canActivate: [AuthGuard]  },
  { path: 'quest', component: QuestPageComponent, canActivate: [AuthGuard]  },
  { path: 'add/:id', component: AddQuestPageComponent, canActivate: [AuthGuard]  },
  { path: 'settings', component: SettingsPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
