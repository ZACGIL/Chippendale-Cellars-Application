import { useState } from 'react';

import Auth from '../../utils/auth';

import Button from '../UI/Button';
import AddWine from '../sections/AddWine';
import UpdateWine from '../sections/UpdateWine';
import DeleteWine from '../sections/DeleteWine';

export default function CRUDform() {

    const [isAddWine, setAddWine] = useState(true);
    const [isUpdateWine, setUpdateWine] = useState(false);
    const [isDeleteWine, setDeleteWine] = useState(false);

    if (!Auth.loggedIn) {
        return (
            <h1>You must be logged in to access this feature.</h1>
        );
    }

    if (isAddWine) {
        return (
            <div>
                <div className='font-body flex justify-center items-center p-10'>
                    <Button
                        text='Add Wine'
                        callback={() => { setAddWine(true), setUpdateWine(false), setDeleteWine(false) }}
                    />
                    <Button
                        text='Update Wine'
                        callback={() => { setAddWine(false), setUpdateWine(true), setDeleteWine(false) }}
                    />
                    <Button
                        text='Remove Wine'
                        callback={() => { setAddWine(false), setUpdateWine(false), setDeleteWine(true) }}
                    />
                </div>
                <AddWine />
            </div>
        )
    }

    if (isUpdateWine) {
        return (
            <div>
                <div className='font-body flex justify-center items-center p-10'>
                    <Button
                        text='Add Wine'
                        callback={() => { setAddWine(true), setUpdateWine(false), setDeleteWine(false) }}
                    />
                    <Button
                        text='Update Wine'
                        callback={() => { setAddWine(false), setUpdateWine(true), setDeleteWine(false) }}
                    />
                    <Button
                        text='Remove Wine'
                        callback={() => { setAddWine(false), setUpdateWine(false), setDeleteWine(true) }}
                    />
                </div>
                <UpdateWine />
            </div>
        )
    }

    if (isDeleteWine) {
        return (
            <div>
                <div className='font-body flex justify-center items-center p-10'>
                    <Button
                        text='Add Wine'
                        callback={() => { setAddWine(true), setUpdateWine(false), setDeleteWine(false) }}
                    />
                    <Button
                        text='Update Wine'
                        callback={() => { setAddWine(false), setUpdateWine(true), setDeleteWine(false) }}
                    />
                    <Button
                        text='Remove Wine'
                        callback={() => { setAddWine(false), setUpdateWine(false), setDeleteWine(true) }}
                    />
                </div>
                <DeleteWine />
            </div>
        )
    }
}