"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Experience",
          id: "experience",
        },
        {
          name: "Location",
          id: "location",
        },
      ]}
      brandName="Radiant Cut"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Radiant Cut Barbering Salon"
      description="Premium grooming experience in Koforidua. Clean, skilled, and relaxing—just how it should be."
      buttons={[
        {
          text: "Book Appointment",
          href: "https://wa.me/233000000000",
        },
        {
          text: "Call Now",
          href: "tel:+233000000000",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-luxury-furniture-adorns-comfortable-home-interior-generated-by-ai_188544-29070.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-man-barber-shop-after-getting-haircut_23-2149186513.jpg",
          alt: "Satisfied client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/customer-standing-front-mirror-barbershop_23-2148181953.jpg",
          alt: "Satisfied client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/barber-showing-man-his-haircut-mirror_107420-94782.jpg",
          alt: "Satisfied client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-barbershop-beard-is-shaving_1321-494.jpg",
          alt: "Satisfied client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/barbershop-with-client-barber_624325-2640.jpg",
          alt: "Satisfied client 5",
        },
      ]}
      avatarText="Join 500+ satisfied gentlemen"
      marqueeItems={[
        {
          type: "text",
          text: "Precision Cuts",
        },
        {
          type: "text",
          text: "Hot Towel Shaves",
        },
        {
          type: "text",
          text: "Beard Grooming",
        },
        {
          type: "text",
          text: "Modern Styles",
        },
        {
          type: "text",
          text: "Executive Grooming",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Very neat and hygienic place. The barber is cool and very skilled. Relaxing waiting area. I love the place."
      rating={5}
      author="Huno Solomon"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/hairstylist-woman-doing-haircut_1163-2018.jpg",
          alt: "Huno Solomon",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-barber-shop-after-getting-haircut_23-2149186513.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/customer-standing-front-mirror-barbershop_23-2148181953.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/barber-showing-man-his-haircut-mirror_107420-94782.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-bearded-man-barbershop-barber-work_627829-7242.jpg",
          alt: "Client 4",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Haircuts",
          description: "Precision fades and classic cuts.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-sensitive-man-posing-studio_23-2149518230.jpg",
        },
        {
          title: "Beard Grooming",
          description: "Defined lines and relaxing trims.",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-male-sitting-armchair-barber-shop-while-hairdresser-modeling-beard-with-scissors-comb-barbershop_613910-18515.jpg",
        },
        {
          title: "Kids Cuts",
          description: "Gentle, precise grooming for kids.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-girl-getting-haircut-salon_23-2149870406.jpg",
        },
        {
          title: "Hair Styling",
          description: "Style finish with premium products.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-barbershop_1303-5410.jpg",
        },
      ]}
      title="Professional Services"
      description="Expert grooming tailored to the modern man."
    />
  </div>

  <div id="experience" data-section="experience">
      <TextAbout
      useInvertedBackground={true}
      title="More Than a Haircut — It’s an Experience"
      buttons={[
        {
          text: "Book Now",
          href: "https://wa.me/233000000000",
        },
      ]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "g1",
          name: "Barber Station",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-details-hairdresser-salon_23-2149205856.jpg",
        },
        {
          id: "g2",
          name: "Waiting Area",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/hair-salon-workplace_23-2148108753.jpg",
        },
        {
          id: "g3",
          name: "Tools Setup",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-male-self-care-setting-still-life_23-2150326537.jpg",
        },
        {
          id: "g4",
          name: "Modern Decor",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-male-self-care-setting-still-life_23-2150326564.jpg",
        },
        {
          id: "g5",
          name: "Salon Lighting",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/reflection-barber-cutting-man-s-hair-mirror_23-2147839790.jpg",
        },
        {
          id: "g6",
          name: "Finish Details",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/male-make-up-artist-putting-make-up-himself_23-2150166187.jpg",
        },
      ]}
      title="Our Gallery"
      description="A glimpse of our premium environment."
    />
  </div>

  <div id="location" data-section="location">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Location & Hours"
      title="Visit Us in Koforidua"
      description="2PRQ+R53, Koforidua. Open 6am – 8:30pm daily. Contact: +233 00 000 0000."
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Ready to book?"
      title="Look Sharp. Feel Confident."
      description="Ready for your next premium grooming session? Book today."
      buttonText="Book Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Experience",
              href: "#experience",
            },
            {
              label: "Location",
              href: "#location",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/233000000000",
            },
            {
              label: "Call Now",
              href: "tel:+233000000000",
            },
          ],
        },
      ]}
      logoText="Radiant Cut"
      copyrightText="© 2025 Radiant Cut Barbering Salon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
