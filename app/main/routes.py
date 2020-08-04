from flask import render_template

from app.main import bp


posts = [
    {
        'title': 'First Post',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac nibh ut orci vehicula commodo. Donec at nisi finibus purus eleifend mollis in ut purus. Aenean eu molestie ex. Nulla pellentesque neque at interdum venenatis. Sed semper orci at augue sodales, sit amet sagittis lacus hendrerit. Nullam nisi tortor, molestie a condimentum nec, mattis efficitur mauris. Sed varius mauris in est ultricies, in commodo nunc placerat. Nam felis quam, tempor at odio ac, vehicula mattis urna. Integer dapibus laoreet felis non posuere. Sed sed eros sed elit blandit imperdiet. Nulla posuere feugiat mattis. Vivamus fringilla consectetur nisi, at venenatis sapien tempus et. Vivamus eget lorem risus. Fusce facilisis pulvinar justo, eu molestie nisi suscipit sit amet. Sed quis quam quis massa consequat elementum sed ut felis. Etiam bibendum, arcu ut pharetra sodales, turpis urna fermentum quam, sit amet pellentesque ante augue in lorem.',
        'author': 'Evan Fetherolf',
        'date_posted': 'August 3, 2020'
    }
]


@bp.route('/')
@bp.route('/index')
def index():
    return render_template('index.html')


@bp.route('/blog')
def blog():
    return render_template('blog.html', posts=posts, title='Blog')
