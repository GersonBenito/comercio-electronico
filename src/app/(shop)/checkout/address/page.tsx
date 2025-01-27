import { Title } from "@/components";
import Form from "@/components/ui/form/Form";

export default function Page() {
    return (
        <div className="
            pr-3
            pl-3
            pt-4
            pb-4
            pr-sm-4
            pr-md-4
            pr-lg-4
            pr-xl-6
            pr-xxl-6
            pr-sm-4
            pl-md-4
            pl-lg-4
            pl-xl-6
            pl-xxl-6
        ">
            <Title title="Dirección" className="align-center mt-2 mb-2" />
            <div className="">
                <Form 
                    classCenter="justify-content-center"
                    styleTitle="d-flex justify-content-center mt-4 mb-4"
                    showButtonForm={true}
                />
            </div>
        </div>
    );
}