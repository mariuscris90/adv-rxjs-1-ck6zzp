import { Observable, of, from, fromEvent, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

import {
  map, filter, reduce
} from 'rxjs/operators'

console.clear();
const l = console.log;

// 1. Create a basic observable
const observable$ = new Observable(observer => {
  setTimeout(() => {
    observer.next(5);
  }, 6000);
  observer.next(1);
  //observer.error(new Error('BAD!'));
  observer.next(2);
  observer.complete();
  return () => {
    l('deallocate resources');
  }
})

// const subscription = observable$.subscribe(value => {
//   l(value);
// }, err => l(err.message),
//   () => l('completed'));

const subscription = observable$.subscribe({
  next: value => {
    l(value);
  },
  error: err => l(err.message),
  complete: () => l('completed')
});

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);

// 2. Crator functions

// const observable$ = of(1, [2, 3], 'four', {five: 5, six: 'six'});

// const observable$ = from([1, 2, 3, 4]);
// const observable$ = from('observable');

// const observable$ = from(new Promise(resolve => resolve('done')))

// const observable$ = fromEvent(document.querySelector('#button1'), 'click');

// const observable$ = fromEvent(document.querySelector('#range1'), 'input');

// observable$.subscribe(value => l(value))

// 3. Hot vs Cold observable

// const cold$ = new Observable(observer => {
//   observer.next(Math.round(Math.random() * 100));
// });

// cold$.subscribe(val => l(val));
// cold$.subscribe(val => l(val));

// const number = Math.round(Math.random() * 100);

// const hot$ = new Observable(observer => {
//   observer.next(number);
// });

// hot$.subscribe(val => l(val));
// hot$.subscribe(val => l(val));


// 4. Subjects

// 4.1 Subject

// const subject = new Subject();

// subject.subscribe(val => l(`Sub 1: ${val}`));
// subject.subscribe(val => l(`Sub 2: ${val}`));

// subject.next(1);
// subject.next(2);

// subject.asObservable().subscribe(val => l(`Sub 3: ${val}`));

// setTimeout(() => {
//   subject.next(3);
//   subject.complete();
// }, 2000);

// 4.2 Behavior Subject

// const behSubject = new BehaviorSubject(1);

// behSubject.subscribe(val => l(`Sub 1: ${val}`));
// behSubject.subscribe(val => l(`Sub 2: ${val}`));

// behSubject.next(2);
// behSubject.next(3);

// l(behSubject.value)

// behSubject.asObservable().subscribe(val => l(`Sub 3: ${val}`));

// setTimeout(() => {
//   behSubject.next(4);
//   behSubject.complete();
// }, 2000)

// 4.3 Replay Subjects

// const replaySubject = new ReplaySubject(4);

// replaySubject.next(1);
// replaySubject.next(2);
// replaySubject.next(3);
// replaySubject.next(4);
// replaySubject.next(5);

// replaySubject.subscribe(val => l(`Sub: ${val}`));

// replaySubject.complete();