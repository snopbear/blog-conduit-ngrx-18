import { AsyncPipe, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BackendErrorMessagesComponent } from 'src/app/@shared/components/backend-error-messages/backend-error-messages.component';



const modules = [ReactiveFormsModule];
const router = [RouterLink];
const components = [BackendErrorMessagesComponent];
const pipes = [AsyncPipe];
const common = [NgIf];

const registerComponentImports = [
  ...modules,
  ...router,
  ...components,
  ...pipes,
  ...common,
];

export default registerComponentImports;
