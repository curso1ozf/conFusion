import { trigger, animation, state, style, transition, animate} from '@angular/animations';

export function visibility () {
    return trigger('visibility',[
        state('shown',style({
          transform: 'scale(1.0)',
          opacity: 1
        })),
        state('hidden', style({
          transform: 'scale(0,5)',
          opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
      ])
}


export function flyInOut() {
    return trigger ('flyInOut',[
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            animate('500ms ease-in'),
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]),
        transition(':leave', [
            animate('500ms ease-out',style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ])
}

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}