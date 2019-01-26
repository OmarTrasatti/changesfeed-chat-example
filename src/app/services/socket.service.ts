import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observer } from 'rxjs';
import { Message } from '../model/message';
import { Event } from '../model/event';


import * as socketIo from 'socket.io-client';


const FEED_URL = 'ws://admin:changeit@localhost:8080/chat/public/_feeds/public_feed/1';
const MESSAGES_URL = 'http://admin:changeit@localhost:8080/chat/public?np';

@Injectable()
export class SocketService {
    constructor(private http: HttpClient) {

    }

    public initSocket(): Observable<boolean> {
        const socket = new WebSocket(FEED_URL);

        return Observable.create((observer: Observer<boolean>) => {
            socket.onmessage = function () {
                observer.next(true);
            };
        });

    }

    public getMessages(): Observable<Array<Message>> {
        return this.http.get<Array<Message>>(MESSAGES_URL);
    }
    public postMessage(content: string, from: string): Observable<HttpResponse<any>> {
        return this.http
        .post<HttpResponse<any>>(MESSAGES_URL, {
            'content': content,
            'from': from
        });
    }
}
