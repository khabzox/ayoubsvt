import Header from "../../../components/Header/page";
import { Button } from "../../../components/ui/button";

export default function tutorielsPage() {
    return (
        <>
            <div className="bg-black">
                <div className="justify-items-center grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5 max-w-6xl items-center justify-center">
                    <div className="">
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <img className="rounded-lg" src="/images/readme-bk.png" width={300} height={30} alt="" />
                        <Button variant="outline">Button</Button>
                    </div>
                </div>
            </div>
        </>
    );
}