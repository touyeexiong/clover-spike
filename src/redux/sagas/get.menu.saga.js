import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMenu() {
    try {
        console.log(`we in fetchMenu`);
        
        const response = yield axios.get(`/api/getmenu/`)
        yield put ({ type: 'SET_MENU', payload: response.data.elements});
    }
    catch (error) {
        console.log(`menu get has an error`, error);
        
    }
}

function* getmenusaga() {
    yield takeLatest('FETCH_MENU', fetchMenu)
}

export default getmenusaga;