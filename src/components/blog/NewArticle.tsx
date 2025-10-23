import Link from 'next/link';
import Categories from './BlogCategoryArticle';
import Tags from './BlogTagArticle';

export default function NewArticle() {
  const articles = [
    {
      id: 1,
      image: "/assets/img/post-thumbnail/1.png",
      title: "سایت و فروشگاهتو طراحی کن",
      date: "۱۰ مرداد ۱۳۹۸"
    },
    {
      id: 2,
      image: "/assets/img/post-thumbnail/2.png",
      title: "امنیت سایتت رو تامین کن",
      date: "۱۰ مرداد ۱۳۹۸"
    },
    {
      id: 3,
      image: "/assets/img/post-thumbnail/3.png",
      title: "اینستاگرام را پول ساز کن",
      date: "۱۰ مرداد ۱۳۹۸"
    },
    {
      id: 4,
      image: "/assets/img/post-thumbnail/4.png",
      title: "سایت خودت رو چندزبانه کن",
      date: "۱۰ مرداد ۱۳۹۸"
    }
  ];

  const categories = [
    { name: "بهینه سازی", href: "#" },
    { name: "برنامه نویسی", href: "#" },
    { 
      name: "طراحی سایت", 
      href: "#",
      subcategories: [
        { name: "وردپرس", href: "#" },
        { name: "پلاگین نویسی", href: "#" }
      ]
    },
    { name: "گرافیک", href: "#" }
  ];

  const tags = [
    "بهینه سازی",
    "برنامه نویسی",
    "طراحی سایت",
    "وردپرس",
    "پلاگین نویسی",
    "گرافیک"
  ];

  return (
    <div 
      className="col-lg-3 col-md-4 col-sm-12 col-12 mb-3 sidebar sticky-sidebar" 
      style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px' }}
    >
      <div 
        className="theiaStickySidebar" 
        style={{ paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none' }}
      >
        {/* جدیدترین نوشته ها */}
        <div className="widget-posts dt-sn dt-sl mb-3 border-bottom">
          <div className="title-sidebar dt-sl mb-3">
            <h3>جدیدترین نوشته ها</h3>
          </div>
          <div className="content-sidebar dt-sl">
            {articles.map((article) => (
              <div key={article.id} className="item">
                <div className="item-inner">
                  <div className="item-thumb">
                    <Link 
                      href="#" 
                      className="img-holder" 
                      style={{ backgroundImage: `url('${article.image}')` }}
                    ></Link>
                  </div>
                  <p className="title">
                    <Link href="#">{article.title}</Link>
                  </p>
                  <div className="item-meta">
                    <span className="time">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* استفاده از کامپوننت Categories */}
        <Categories categories={categories} />

        {/* استفاده از کامپوننت Tags */}
        <Tags tags={tags} />

        {/* Sticky Sidebar Elements */}
        <div 
          className="resize-sensor" 
          style={{ 
            position: 'absolute', 
            inset: '0px', 
            overflow: 'hidden', 
            zIndex: -1, 
            visibility: 'hidden' 
          }}
        >
          <div 
            className="resize-sensor-expand" 
            style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              right: 0, 
              bottom: 0, 
              overflow: 'hidden', 
              zIndex: -1, 
              visibility: 'hidden' 
            }}
          >
            <div style={{ 
              position: 'absolute', 
              left: '0px', 
              top: '0px', 
              transition: 'all', 
              width: '330px', 
              height: '844px' 
            }}></div>
          </div>
          <div 
            className="resize-sensor-shrink" 
            style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              right: 0, 
              bottom: 0, 
              overflow: 'hidden', 
              zIndex: -1, 
              visibility: 'hidden' 
            }}
          >
            <div style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              transition: '0s', 
              width: '200%', 
              height: '200%' 
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}