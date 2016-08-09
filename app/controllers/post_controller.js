import Post from '../models/post_model';


export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.save()
  .then(result => {
    res.json({ message: 'Post created!' });
  })
  .catch(error => {
    res.json({ error });
  });
};

const cleanPosts = (posts) => {
  return posts.map(post => {
    return { id: post._id, title: post.title, tags: post.tags, content: post.content };
  });
};

const cleanPost = (post) => {
  return { id: post._id, title: post.title, tags: post.tags, content: post.content };
};

export const getPosts = (req, res) => {
  Post.find()
    .then(allPosts => {
      res.json(cleanPosts(allPosts));
    })
  .catch(error => {
    res.json({ error });
  });
};


export const getPost = (req, res) => {
  Post.findByID({ _id: req.params.id })
    .then(post => {
      res.json(cleanPost(post));
    })
  .catch(error => {
    res.json({ error });
  });
};


export const deletePost = (req, res) => {
  const currentPost = { _id: req.params.id };
  Post.remove(currentPost)
  .then(result => {
    res.json({ message: 'Post deleted!' });
  })
  .catch(error => {
    res.json({ error });
  });
};


export const updatePost = (req, res) => {
  const currentPost = { _id: req.params.id };
  Post.update(currentPost, {
    title: req.body.title,
    tags: req.body.tags,
    content: req.body.content,
  })
  .then(result => {
    res.json({ message: 'Post updated!' });
  })
  .catch(error => {
    res.json({ error });
  });
};
