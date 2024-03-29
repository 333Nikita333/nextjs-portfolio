import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AnimatedText, Circles, Meta } from '../../components';
import contactEn from '../../locales/en/contact.json';
import contactUk from '../../locales/uk/contact.json';
import { fadeIn } from '../../variants';

const initialData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        console.log('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const t = router.locale === 'en' ? contactEn : contactUk;

  return (
    <>
      <Meta
        title={t.metaTitle}
        description={t.metaDescription}
        robots="index, nofollow"
      />

      <div className="h-full bg-primary/30">
        <Circles />
        <div
          className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center 
        h-full max-xl:overflow-y-auto"
        >
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px] max-xl:mt-auto">
            {/* text */}
            <AnimatedText
              isTypingAnimate={false}
              tag="h2"
              variants={fadeIn('down', 0.2)}
              className="h2 text-center mb-12 "
            >
              {t.title1} <span className="text-accent">{t.title2}</span>
            </AnimatedText>
            {/* form */}
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col items-center gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
            >
              {/* group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="input max-sm:text-sm"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="input max-sm:text-sm"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder={t.messageSubPlaceholder}
                className="input max-sm:text-sm"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder={t.messageTextPlaceholder}
                className="textarea max-sm:text-sm"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 
              transition-all duration-300 flex items-center justify-center overflow-hidden 
            hover:border-accent group"
                type="submit"
              >
                <span
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all duration-500"
                >
                  {t.buttonText}
                </span>
                <BsArrowRight
                  className="-translate-y-120%] opacity-0 group-hover:flex 
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 
                absolute text-[22px]"
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
