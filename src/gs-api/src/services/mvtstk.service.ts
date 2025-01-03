/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStkDto } from '../models/mvt-stk-dto';
@Injectable({
  providedIn: 'root',
})
class MvtstkService extends __BaseService {
  static readonly correctionStockPosPath = '/gestiondestock/v1/mvtstk/correctionpos';
  static readonly mvtStkArticlePath = '/gestiondestock/v1/mvtstk/filter/article/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockPosResponse(body?: MvtStkDto): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/correctionpos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockPos(body?: MvtStkDto): __Observable<MvtStkDto> {
    return this.correctionStockPosResponse(body).pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mvtStkArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/mvtstk/filter/article/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mvtStkArticle(idArticle: number): __Observable<Array<MvtStkDto>> {
    return this.mvtStkArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }
}

module MvtstkService {
}

export { MvtstkService }
