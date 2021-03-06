import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { SingleResultModel } from '../../utils/single-result.model';
import { TokenModel } from '../../domain/token.model';
import { TokenRepository } from '../../repositories/token.repository';
import { AuthenticationModel } from 'src/app/core/domain/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class GenerateTokenUsecase
  implements UseCase<AuthenticationModel, SingleResultModel<TokenModel>>
{
  constructor(private processoRepository: TokenRepository) {}

  execute(params: AuthenticationModel): Observable<SingleResultModel<TokenModel>> {
    return this.processoRepository.postGenerateToken(params);
  }
}
