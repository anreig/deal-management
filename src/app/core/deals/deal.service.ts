import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private URL = 'api/deals';

  constructor(private http: HttpClient) { }

  rawDeals$ = this.http.get(`${this.URL}`);

  allDeals$ = this.rawDeals$
    .pipe(
      map((result: IDeal[]) => result),
      map(this.mapResponse)
    );

  sortBy(type) {
    return type === 'asc' ? this.sortByPriceAsc() : this.sortByPriceDesc();
  }

  sortByPriceAsc() {
    return this.rawDeals$
      .pipe(
        map((result: IDeal[]) => result.sort((item: IDeal, item2: IDeal) => item.price - item2.price)),
        map(this.mapResponse)
      );
  }

  sortByPriceDesc() {
    return this.rawDeals$
      .pipe(
        map((result: IDeal[]) => result.sort((item: IDeal, item2: IDeal) => item2.price - item.price)),
        map(this.mapResponse)
      );
  }

  searchDeals(term: string): Observable<IDealWithPrices> {
    term = term.trim();
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<IDeal[]>(this.URL, options).pipe(
      map(this.mapResponse),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  private mapResponse(deals: IDeal[]) {
    const prices = deals.map((deal: IDeal) => deal.price);
    return {
      deals,
      maxPrice: Math.max(...prices),
      minPrice: Math.min(...prices)
    } as IDealWithPrices;
  }
}
