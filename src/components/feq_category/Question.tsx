import Image from 'next/image';
import Link from 'next/link';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  index: number;
  section: string;
}

export default function FeqQuestion() {
  const loginQuestions: AccordionItem[] = [
    {
      id: "login1",
      question: "چطور میتوانم امتیاز بگیریم؟",
      answer: `
        <p>شما از سه راه می‌توانید امتیاز بگیرید:</p>
        <ul>
          <li>خرید کالا</li>
          <li>ثبت نظر</li>
          <li>دعوت از دوستان برای خرید از دیجی‌کالا</li>
        </ul>
      `
    },
    {
      id: "login2",
      question: "میتوانم سفارش خود را در محل پرداخت کنم؟",
      answer: "<p>بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت کنید، در برخی موارد امکان پرداخت سفارش در محل وجود ندارد.</p>"
    },
    {
      id: "login3",
      question: "چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟",
      answer: "<p>شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ، صفحه تماس با ما و تلفن درخواست خود را ثبت نمایید.</p>"
    },
    {
      id: "login4",
      question: "چطور میتوانم سفارشم را لغو کنم؟",
      answer: "<p>شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید.</p>"
    }
  ];

  const frequentQuestions: AccordionItem[] = [
    {
      id: "freq1",
      question: "چطور میتوانم امتیاز بگیریم؟",
      answer: `
        <p>شما از سه راه می‌توانید امتیاز بگیرید:</p>
        <ul>
          <li>خرید کالا</li>
          <li>ثبت نظر</li>
          <li>دعوت از دوستان برای خرید از دیجی‌کالا</li>
        </ul>
      `
    },
    {
      id: "freq2",
      question: "میتوانم سفارش خود را در محل پرداخت کنم؟",
      answer: "<p>بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت کنید، در برخی موارد امکان پرداخت سفارش در محل وجود ندارد.</p>"
    },
    {
      id: "freq3",
      question: "چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟",
      answer: "<p>شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ، صفحه تماس با ما و تلفن درخواست خود را ثبت نمایید.</p>"
    },
    {
      id: "freq4",
      question: "چطور میتوانم سفارشم را لغو کنم؟",
      answer: "<p>شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید.</p>"
    }
  ];

  const AccordionItem: React.FC<AccordionItemProps> = ({ item, index, section }) => (
    <div className="card">
      <div className="card-header" id={`heading${section}${index}`}>
        <h2 className="mb-0">
          <button 
            className="btn btn-block text-right collapsed" 
            type="button" 
            data-toggle="collapse" 
            data-target={`#collapse${section}${index}`} 
            aria-expanded="false" 
            aria-controls={`collapse${section}${index}`}
          >
            {item.question}
            <i className="mdi mdi-chevron-down"></i>
          </button>
        </h2>
      </div>
      <div 
        id={`collapse${section}${index}`} 
        className="collapse" 
        aria-labelledby={`heading${section}${index}`} 
        data-parent={`#accordion${section}`}
      >
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container main-container">
      <div className="row">
        {/* بخش ورود و ثبت نام */}
        <div className="col-12">
          <div className="page info-page-cats dt-sl dt-sn pt-3 pb-2">
            <div className="row">
              <div className="col-12 pr-4 mb-3">
                <div className="section-title title-wide no-title-wide-before mb-1 no-after-title-wide">
                  <Image 
                    src="/assets/img/faq/1.png" 
                    width={60}
                    height={60}
                    alt="ورود و ثبت نام"
                  />
                  <h2 className="font-weight-bold">ورود و ثبت نام</h2>
                </div>
              </div>
              <div className="col-12 filter-product mb-3">
                <div className="accordion" id="accordionLogin">
                  {loginQuestions.map((item, index) => (
                    <AccordionItem 
                      key={item.id}
                      item={item}
                      index={index}
                      section="Login"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* بخش پرتکرارترین پرسش‌ها */}
        <div className="col-12">
          <div className="page dt-sl dt-sn pb-2 mb-4">
            <div className="row">
              <div className="col-12 pr-4 mb-3">
                <div className="section-title title-wide mb-1 no-after-title-wide">
                  <h2 className="font-weight-bold">پرتکرارترین پرسش‌ها</h2>
                </div>
              </div>
              <div className="col-12 filter-product mb-3">
                <div className="accordion" id="accordionFrequent">
                  {frequentQuestions.map((item, index) => (
                    <AccordionItem 
                      key={item.id}
                      item={item}
                      index={index}
                      section="Frequent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* بخش ارتباط با ما */}
        <div className="col-12">
          <div className="page-question-not-found">
            <div className="row">
              <div className="col-12">
                <div className="page-question-not-found-text">
                  جواب یا پرسش خود را پیدا نکردید؟
                  <br />
                  روش‌های ارتباط با ما
                </div>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <Image 
                  src="/assets/img/faq/phone.svg" 
                  alt="تماس تلفنی"
                  width={80}
                  height={80}
                />
                <div className="page-contact-option-text">تماس تلفنی</div>
                <div className="page-contact-option-text mr-3">۰۲۱-۶۱۹۳۰۰۰۰</div>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <Image 
                  src="/assets/img/faq/email.svg" 
                  className="mb-5" 
                  alt="ارسال ایمیل"
                  width={80}
                  height={80}
                />
                <Link href="/contact" className="btn btn-info pr-4 pl-4">
                  ارسال پیام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}