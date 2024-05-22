import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostNew from "pages/posts/index";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import SignUp from "pages/signUp";
import Comment from "pages/comment";

export default function RouterPage() {
	return <Routes>
		<Route path='/' element={<Home />}/>
		<Route path='/post/new' element={<PostNew />}/>
		<Route path='/post/edit/:id' element={<PostEdit />}/>
		<Route path='/profile' element={<Profile />}/>
		<Route path='/signUp' element={<SignUp />}/>
		<Route path='/comment' element={<Comment />}/>
		<Route path="*" element={<Navigate replace to="/" />}/>
	</Routes>
}