export default function Index() {
  return (
    <div class="flex flex-col items-center mt-8">
      <div class="w-40 mb-4">
        <img src="images/banner.png" />
      </div>
      <h1 class="text-4xl italic mb-8">
        It's time to say goodbye dear friends...
      </h1>

      <div class="w-1/2 space-y-4">
        <p>
          After ten years of having the privilege of serving you, it's with a
          heavy heart that we are shutting our doors for good. The pandemic hit
          the ready-to-eat industry especially hard, and being a small
          family-run business, we didn't have the resources to weather the storm
          any longer.
        </p>

        <p>
          It's been our honor to provide you with healthy food all these years.
          Thank you for all the support. We hope to be able to serve you again
          in the future.
        </p>

        <p>
          If you need to contact us, please email:{" "}
          <a class="font-medium italic" href="mailto:info@mlvegankitchen.com">
            info@mlvegankitchen.com
          </a>
        </p>

        <p>With love and gratitude,</p>
        <p class="italic font-bold text-right">~MLVK Team</p>
      </div>
    </div>
  );
}
