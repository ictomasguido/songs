import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getSongs() {
    return this.firestore.collection<any>('songs', ref => ref.orderBy('title', 'asc'))
  }
}
