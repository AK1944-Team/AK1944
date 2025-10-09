import { Heading } from "@/components/shared/Heading/Heading";
import { Button } from "@/components/shared/Button/Button";

export const VolunteerJoin = () => (
  <section className="mt-6 flex justify-center">
    <div className="w-full max-w-3xl space-y-6 text-center text-28 font-bold text-greenB">
      <div className="inline-block">
        <Heading
          color="green"
          contrast="yellow"
          variant="h3"
          className="mb-6 mt-6 uppercase"
        >
          dołącz do nas!
        </Heading>
      </div>
      <p>
        Razem możemy więcej niż tylko opowiadać historię – możemy ją przeżywać,
        przekazywać dalej i sprawić, by nigdy nie została zapomniana.
      </p>
      <div className="flex justify-center pt-10">
        <Button
          label="Wypełnij formularz"
          variant="primary"
          className="rounded-desktop min-w-[180px]"
          ariaDescription="Wypełnij formularz"
          href=""
        />
      </div>
    </div>
  </section>
);
