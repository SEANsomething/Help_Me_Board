import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostNew from "pages/posts/index";
import PostView from "pages/posts/view";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import SignUp from "pages/signUp";
import BasicModal from "components/modal/BasicModal";

export default function RouterPage() {
	return <>
		{false && <BasicModal></BasicModal>}
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/post/new' element={<PostNew />}/>
			<Route path='/post/:id' element={<PostView />}/>
			<Route path='/post/edit/:id' element={<PostEdit />}/>
			<Route path='/profile' element={<Profile />}/>
			<Route path='/signUp' element={<SignUp />}/>
			<Route path="*" element={<Navigate replace to="/" />}/>
		</Routes>
	</>
}