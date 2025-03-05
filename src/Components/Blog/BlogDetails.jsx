

import BlogContent from './Components/BlogContent';
import BlogImage from './Components/BlogImage';
import BlogTitlePage from './Components/BlogTitlePage';
import CommentsSection from './Components/CommentsSection';
import Newsletter from './Components/Newsletter';
import PostComment from './Components/PostComment';
import TagsSection from './Components/TagsSection';
import './style.css'


export default function BlogDetails() {
    return (
        <div className='BlogDetails'>
            <BlogTitlePage />
            <div className="container">
                <BlogImage />
                <BlogContent />
                <TagsSection />
                <CommentsSection />
                <PostComment />
                <Newsletter />

            </div></div>
    )
}
