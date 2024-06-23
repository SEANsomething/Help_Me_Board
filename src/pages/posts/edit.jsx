import Header from "components/Header";
import PostForm from "components/PostForm";
import ModalGyu from "components/modal/ModalGyu";

export default function PostEdit() {
	return <>
		<Header />
		<h1>PostEdit Page</h1>
		{true && <ModalGyu />}
		<PostForm />
	</>;
}