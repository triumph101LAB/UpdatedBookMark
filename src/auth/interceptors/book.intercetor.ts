import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AgeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const userAge = req.user?.age;

    return next.handle().pipe(
      map((books) => {
        // If the response is an array of books, filter by age range
        if (Array.isArray(books)) {
          const accessibleBooks = books.filter(
            (book) =>
              userAge >= book.ageRange.min && userAge <= book.ageRange.max
          );
          if (accessibleBooks.length === 0) {
            throw new ForbiddenException('There are No books within Your age range');
          }
          return accessibleBooks;
        }
        // If the response is a single book, check age range
        if (books && books.ageRange &&(userAge < books.ageRange.min || userAge > books.ageRange.max)) {
          throw new ForbiddenException('You are not allowed to access this book.');
        }
        return books;
      }),
    );
  }
}