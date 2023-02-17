import React, {useState, useCallback } from 'react';
import type {User} from './mocks/types/User';

export const Users = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getUserList = useCallback(() => {
    fetch('/users')
      .then((res) => res.json())
      .then(setUserData);
  }, []);

  if (userData.length > 0) {
    return (
      <main>
        <h1>Mock data 리스트(참고 - https://jsonplaceholder.typicode.com/users)</h1>
        <ul>
          {userData.map((user:User) => (
            <li key={user.id}>
              <div>
                <span>id: </span>
                <span>{user.id}</span>
              </div>
              <div>
                <span>name: </span>
                <span>{user.name}</span>
              </div>
              <div>
                <span>username: </span>
                <span>{user.username}</span>
              </div>
              <div>
                <span>email: </span>
                <span>{user.email}</span>
              </div>
              <div>
                <span>address </span><br/>
                <span>&nbsp;&nbsp;street : {user.address.street}<br/>&nbsp;&nbsp;suite: {user.address.suite}<br/>&nbsp;&nbsp;city: {user.address.city}<br/>&nbsp;&nbsp;zipcode: {user.address.zipcode}<br/>&nbsp;&nbsp;geo: {user.address.geo.lat} / {user.address.geo.lng}</span>
              </div>
              <div>
                <span>phone: </span>
                <span>{user.phone}</span>
              </div>
              <div>
                <span>website: </span>
                <span>{user.website}</span>
              </div>
              <div>
                <span>company </span><br/>
                <span>&nbsp;&nbsp;name: {user.company.name}<br/>&nbsp;&nbsp;catchPhrase: {user.company.catchPhrase}<br/>&nbsp;&nbsp;bs: {user.company.bs}</span>
              </div><br/>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <button type="button" onClick={getUserList}>
      Mock data 호출
    </button>
  );
};