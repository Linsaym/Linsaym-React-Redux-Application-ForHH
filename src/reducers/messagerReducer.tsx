import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Action } from '@remix-run/router';
import { nextTick } from 'process';

export type UserType = {
	id: number,
	email: string,
	first_name: string,
	last_name: string,
	avatar: string,
}
export type messagerState = {
	data: UserType[],
	messages: messages,
	input: string,
	idOpenDialog: number,
}
type messageType = "sent" | "received"

interface messages {
	[id: string]: { type: messageType, text: string }[]
}

interface PayloadAddMessage { input: string, id: number }

const initialState: messagerState = {
	data: [],
	messages: {
		['1']: [
			{ type: 'sent', text: 'OMG you use Redux!?' },
			{ type: 'received', text: 'Yes, i am cool boy' },
			{ type: 'received', text: 'Try to write something in the chat' },
		],
		['2']: [
			{ type: 'received', text: 'Hi long time no see' },
			{ type: 'received', text: 'Can we meet?)' },
		],
		['3']: [
			{ type: 'sent', text: 'What`s up?' },
			{ type: 'received', text: 'Now I`m studying Next.js' },
			{ type: 'received', text: 'Do you think it will work out?' },
		],
		['4']: [
			{ type: 'sent', text: 'No' },
			{ type: 'received', text: 'Yes?' },
		],
		['5']: [
			{ type: 'sent', text: 'Why aren`t you using the server?' },
			{ type: 'received', text: 'It is expensive' },
		],
		['6']: [
			{ type: 'sent', text: 'I`m tired of making up phrases' },
			{ type: 'received', text: 'Me too' },
		],
		['7']: [
			{ type: 'sent', text: 'OMG you use Redux!?' },
			{ type: 'received', text: 'Yes, i am cool boy' },
		],
		['8']: [
			{ type: 'sent', text: 'I`m tired of making up phrases' },
			{ type: 'received', text: 'Me too' },
		],
		['9']: [
			{ type: 'sent', text: 'OMG you use Redux!?' },
			{ type: 'received', text: 'Yes, i am cool boy' },
		],
		['10']: [
			{ type: 'sent', text: 'I`m tired of making up phrases' },
			{ type: 'received', text: 'Me too' },
		],
		['11']: [
			{ type: 'sent', text: 'OMG you use Redux!?' },
			{ type: 'received', text: 'Yes, i am cool boy' },
		],
		['12']: [
			{ type: 'sent', text: 'Heeeeeloooo!' },
			{ type: 'received', text: 'HEEEEEELOOOOO!' },
			{ type: 'sent', text: 'Heeeeelooooooooooooooooooooooooooooooooooooooooo!' },
			{ type: 'sent', text: 'Heeeeeloooo!' },
			{ type: 'received', text: 'HEEEEEELOOOOO!' },
			{ type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae dolore explicabo provident perferendis omnis, inventore debitis accusantium sequi alias sapiente qui exercitationem ad! Laboriosam facilis minima sapiente! Non, dolores obcaecati?Labore commodi modi quis cum sapiente tenetur quasi laborum neque recusandae distinctio.Architecto delectus, mollitia in, deleniti qui obcaecati sit repudiandae rem esse quas, nesciunt ullam placeat temporibus sequi earum.Aliquid tenetur architecto dolorum beatae itaque libero, totam quidem.Saepe blanditiis accusamus quisquam nam facere cumque! Rerum dolore nemo vitae vel earum consequuntur reiciendis ducimus eius, possimus impedit nostrum facere!Atque molestiae ipsa cupiditate, aperiam, sint modi suscipit porro officiis eum ut similique, neque repudiandae esse.Aperiam minima, numquam explicabo similique aspernatur architecto nostrum accusamus, modi quisquam possimus, nisi quae?Adipisci dolorem minima earum quas cum vero aliquam iste perferendis optio vitae saepe, possimus ipsum est consequuntur veniam, obcaecati similique sequi voluptatum.Incidunt voluptatem laboriosam praesentium similique labore quisquam veniam.' },
			{ type: 'sent', text: 'Heeeeeloooo!' },
			{ type: 'received', text: 'HEEEEEELOOOOO!' },
			{ type: 'sent', text: 'Heeeeelooooooooooooooooooooooooooooooooooooooooo!' },
			{ type: 'received', text: 'HEEEEEELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!' },
		],
	},
	input: '',
	idOpenDialog: 0
}

export const fetchUsers = createAsyncThunk(
	'massenger/fetchUsers',
	async function () {
		const data1 = axios.get('https://reqres.in/api/users?page=1')
		const data2 = axios.get('https://reqres.in/api/users?page=2')
		const data = [...(await data1).data.data, ...(await data2).data.data]
		return (await data)
	}
)

const RandomPhrases = [
	'OMG',
	'Let`s go!',
	'I want to sleep(',
	'What are you doing?',
	'I am bored',
	'Wait, I think...',
	'((',
	'i love you',
	'Let`s go to bed?',
	'I do not know',
	'You`re too cool for me to answer anything.'
]

export const massengerReducer = createSlice({
	name: 'massenger',
	initialState,
	reducers: {
		addMessege: (state, action: PayloadAction<PayloadAddMessage>) => {
			state.messages[action.payload.id].push({ type: 'sent', text: action.payload.input })
			state.messages[action.payload.id].push({ type: 'received', text: RandomPhrases[Math.floor(Math.random() * RandomPhrases.length)] })
			state.input = ''
		},
		changeInput: (state, action: PayloadAction<string>) => {
			state.input = action.payload
		},
		openDialog: (state, action: PayloadAction<number>) => {
			state.idOpenDialog = action.payload
		},

	},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => { state.data = action.payload })
	}
})


export const { addMessege, changeInput, openDialog } = massengerReducer.actions

export default massengerReducer.reducer