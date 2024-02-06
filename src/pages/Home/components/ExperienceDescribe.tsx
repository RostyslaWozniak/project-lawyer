import AnimateElement from "../../../components/ui/AnimateElement";

const ExperienceDescribe = () => {
  return (
    <section className="bg-secondary py-14">
      <div className="content flex flex-col items-start gap-5">
        <AnimateElement>
          <h2 className="font-medium md:text-2xl">
            Providing Quality and Knowledgeable Legal Representation
          </h2>
        </AnimateElement>
        <AnimateElement>
          <h3 className="text-2xl text-[black] md:text-4xl">
            Working with an Experienced Lawyer
          </h3>
        </AnimateElement>
        <AnimateElement>
          <p className="text-sm md:text-base">
            At our office, we understand the importance of having a legal
            professional on your side who is able to provide knowledgeable and
            quality representation. Our lawyer has years of experience in the
            practice area and can help you navigate complex legal matters. As
            experienced litigators, we are here to ensure your rights are
            protected throughout every step of the process. We will strive to
            solve your case as quickly as possible while always keeping your
            best interests at heart.
          </p>
        </AnimateElement>
      </div>
    </section>
  );
};

export default ExperienceDescribe;
