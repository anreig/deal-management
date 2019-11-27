# WELCOME TO ANGULAR DEAL MANAGEMENT! :rocket:

## Technology stack used

The technology stack used for this example, including libraries and tools are:

- Angular 8
- Nebular
- Bootstrap
- ngx5-slider
- Visual Studio Code
- Ionic generator

## Best practices and patterns applied

Lazy loading for modules (eg)

    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)

Container - presenter pattern 

    <app-deal-card (favorite)="addOrRemoveFavorite($event)" [deal]="deal"></app-deal-card>

using OnPush change detection strategy for performance

     ...
     changeDetection: ChangeDetectionStrategy.OnPush }) export class SortComponent {

## Development server

Run **npm install** to install dependencies.

    npm install

Run **npm start** for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

    npm start

## Improvements TODO

1. Tests.
2. Best UX / UI of many components.
3. Filtering by all fields.


Note: Disbaled components no working for now.
