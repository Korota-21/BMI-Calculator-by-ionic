/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResultText = (weghit: number) => {
  let hint = [''];

  let resultText = '';
  let color = '';

  if (weghit >= 18.5 && weghit <= 24.9) {
    resultText = 'وزنك في المعدل الطبيعي';
    color = 'success';
    hint = [
      'اذا كنت تريد المحافظة على وزنك فعليك أن تتبع نظام صحي طويل الأمد يمزج بين الاختيارات الذكية للطعام والتحرك أكثر.',

      'عدم إلغاء أي وجبة من الوجبات الرئيسية وتناول الوجبات في مواعيد ثابتة ومنتظمة',

      'تناول أغذية مختلفة ومتنوعة وبالكميات الصحيحة الموصى بها كما في الهرم الغذائي',

      'التقليل من تناول الأطعمة السكرية والمقلية والمشروبات الغازية.',

      'التقليل من إضافة الملح للطعام والأغذية المعلبة.',

      'التقليل من تناول الوجبات المحضرة خارج المنزل.',

      'يفضل شرب الحليب ومنتجاته قليلة الدسم.',

      'يفضل الإكثار من تناول السمك والدجاج أما اللحوم الحمراء فيكون بشكل معتدل.',

      'الإكثار من تناول الفواكه والخضراوات والبقوليات الغنية بالألياف.',

      'مزاولة الرياضة بشكل منتظم.',
    ];
  } else if (weghit >= 25 && weghit <= 29.9) {
    resultText = 'وزنك أعلى من المعدل الطبيعي';
    color = 'warning';
    hint = [
      'ابدأ بوضع خطة منطقية لتستمر معك مدى الحياة، ركز على الصورة الأكبر وهي الصحة الجيدة مبدئياً، ولا تفكر في الخطط القصيرة المدى لنقصان الوزن.',
      'ضع أهداف صحية وواقعية، ففرصة نجاح النظام الغذائي تكون أكبر عند وضع اهداف واقعية، ابدأ بهدف أو هدفين، مع بعض التغييرات البسيطة ، و متابعة التغييرات في الوزن عن طريق عمل سجل غذائي ورياضي خاص بك.',
      'اتبع نظام غذائي خاص بك، قم بزيارة موقع' +
      ' <a>https://www.choosemyplate.gov</a> ' +
      'لتخطيط نظامك الغذائي والتعرف على كميات الطعام التي تحتاجها، واذا كانت لديك احتياجات غذائية خاصة عليك استشارة اخصائي التغذية.',
      'تناول على الأقل 3 وجبات في اليوم، وخطط لوجبات اليوم مبكراً، سواء ان تناولت الطعام داخل المنزل أو خارجه فالتخطيط للوجبات يساعدك على المحافظة على الوزن.',
      'نسق طبقك بأطعمة متنوعة، نصف طبقك يجب أن تملأه بالخضراوات والفواكه وربعه باللحوم القليلة الدهن (الدواجن والأسماك) والربع المتبقي من الحبوب والنشويات، يجب إضافة الألبان قليلة او خالية الدسم أو الأجبان للوجبات أو بين الوجبات ان أمكن.',
      'ابدأ وجبتك بأطعمة قليلة السعرات مثل الفواكه والخضراوات والسلطات، هذه النوعية من الأطعمة مليئة باحتياجات الجسم من المواد الغذائية.',
      'ركز على طعامك. اختر مكان واحد في منزلك لتناول الطعام، لا تتناول الطعام أثناء الانشغال ممكن ان يؤدي الى تناول أكثر مما تعتقد، أيضاً تصغير حجم الطبق ممكن أن يجعلك أكثر ارتياحاً مع كمية الطعام القليلة.',
    ];
  } else if (weghit >= 30) {
    resultText = 'أنت تعاني من سمنة مفرطة';
    color = 'danger';
    hint = ['بعبيه بعدين'];
  } else if (weghit <= 18.5) {
    resultText = 'انت تعاني من نقص في الوزن';
    color = 'danger';
    hint = ['كل الاخضر واليابس وخلاص.'];
  }
  return {resultText, color, hint};
};
