=> Đọc thêm: CSS Unit (px, em, rem,%)
# Cácg insert CSS
file CSS=> link(nằm trong thẻ head)
thẻ style => style trong thẻ head
style inline => thuộc tính của thẻ

#cascade
1.Rule nào xếp sau thì sẽ đè rule xếp trước
2.Tính điểm selector
-inline style
-id
-class attr
-tag

#Inherintance
Sẽ có một số css property (font-family, color, font-size,..)
Áp dụng element cha=> element con cũng được áp dụng 
#Box model
content => padding => border => margin
width, height là nhắc đến width, height của content
=> border-box: box-sizing =>width, height = content+ padding + bodder
margin colapse 

#Layout flow (Display inline, block)
Block => Hiển thị 1 khối => auto ngắt dòng trên và dòng dưới 
=> Chỉnh sửa được width, height
Inline => không có ngắt dòng => Phụ thuộc vào content
=> Không chỉnh sửa được width height
display: inline-block => Hiển thị như inline, chỉnh được width, height
# Display flex(Display grid)
Flex container => trục dọc và trục ngang => cần css sao cho phù hợp 
Flex item
#Position(top, left, right, bottom)
static => mặc định
relative => so với vị trí mặc định của nó
absolute => so với cha gần nhất, position khác static.
(thường sẽ là relative => do muốn el cha không thay đổi vị trí nhưng vẫn muốn khác static)
fixed => so với viewport(màn hình) => tính width, height = 0, đè lên content ở dưới
sticky => nếu chưa scroll => relative, kéo scroll=> fixed
=> Đọc thêm: CSS animation, css transition, css unit
